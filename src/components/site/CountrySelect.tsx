import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMemo } from "react";

export const countries = [
  { code: "CH", name: "Switzerland", dialCode: "+41", regex: /^(\+41|0041|0)?\s?(\d{2})\s?(\d{3})\s?(\d{2})\s?(\d{2})$/, example: "+41 79 123 45 67" },
  { code: "FR", name: "France", dialCode: "+33", regex: /^(\+33|0033|0)?\s?[1-9](\s?\d{2}){4}$/, example: "+33 6 12 34 56 78" },
  { code: "BE", name: "Belgium", dialCode: "+32", regex: /^(\+32|0032|0)?\s?[1-9]\d{1,2}\s?\d{2}\s?\d{2}\s?\d{2}$/, example: "+32 470 12 34 56" },
  { code: "CA", name: "Canada", dialCode: "+1", regex: /^(\+1|001)?\s?\(?[2-9]\d{2}\)?\s?[2-9]\d{2}-?\d{4}$/, example: "+1 416 123 4567" },
  { code: "US", name: "USA", dialCode: "+1", regex: /^(\+1|001)?\s?\(?[2-9]\d{2}\)?\s?[2-9]\d{2}-?\d{4}$/, example: "+1 212 123 4567" },
  { code: "GB", name: "UK", dialCode: "+44", regex: /^(\+44|0044|0)?\s?7\d{3}\s?\d{6}$/, example: "+44 7912 345678" },
  { code: "DE", name: "Germany", dialCode: "+49", regex: /^(\+49|0049|0)?\s?1[5-7]\d{1}\s?\d{7,8}$/, example: "+49 151 12345678" },
  { code: "ES", name: "Spain", dialCode: "+34", regex: /^(\+34|0034)?\s?[67]\d{8}$/, example: "+34 612 345 678" },
  { code: "IT", name: "Italy", dialCode: "+39", regex: /^(\+39|0039)?\s?3\d{2}\s?\d{6,7}$/, example: "+39 312 345 6789" },
  { code: "NL", name: "Netherlands", dialCode: "+31", regex: /^(\+31|0031|0)?\s?6\s?\d{8}$/, example: "+31 6 12345678" },
  { code: "SE", name: "Sweden", dialCode: "+46", regex: /^(\+46|0046|0)?\s?7[02369]\s?\d{7}$/, example: "+46 70 123 45 67" },
  { code: "AU", name: "Australia", dialCode: "+61", regex: /^(\+61|0061|0)?\s?4\d{2}\s?\d{3}\s?\d{3}$/, example: "+61 412 345 678" },
  { code: "IN", name: "India", dialCode: "+91", regex: /^(\+91|0091)?\s?[6-9]\d{9}$/, example: "+91 98765 43210" },
  { code: "AE", name: "UAE", dialCode: "+971", regex: /^(\+971|00971|0)?\s?5[024568]\s?\d{7}$/, example: "+971 50 123 4567" },
  { code: "SG", name: "Singapore", dialCode: "+65", regex: /^(\+65|0065)?\s?[89]\d{7}$/, example: "+65 8123 4567" },
  { code: "ZA", name: "South Africa", dialCode: "+27", regex: /^(\+27|0027|0)?\s?[678]\d{8}$/, example: "+27 82 123 4567" },
  { code: "BR", name: "Brazil", dialCode: "+55", regex: /^(\+55|0055)?\s?\(?[1-9]{2}\)?\s?9\d{4}-?\d{4}$/, example: "+55 11 91234-5678" },
  { code: "MX", name: "Mexico", dialCode: "+52", regex: /^(\+52|0052)?\s?1?\s?\d{10}$/, example: "+52 55 1234 5678" },
  { code: "JP", name: "Japan", dialCode: "+81", regex: /^(\+81|0081|0)?\s?[789]0-?\d{4}-?\d{4}$/, example: "+81 90-1234-5678" },
  { code: "CY", name: "Cyprus", dialCode: "+357", regex: /^(\+357|00357)?\s?[9]\d{7}$/, example: "+357 99 123456" }
];

export function getCountryByCode(code: string) {
  return countries.find(c => c.code === code) || countries[0];
}

export function formatPhoneForCRM(phone: string, countryCode: string) {
  const country = getCountryByCode(countryCode);
  // Remove all non-digits
  let digits = phone.replace(/\D/g, "");
  // Check if it starts with dialCode without + (e.g. 41)
  const numericDialCode = country.dialCode.replace("+", "");
  
  if (digits.startsWith("00" + numericDialCode)) {
    // fine
  } else if (digits.startsWith("00")) {
    // Do nothing, assume user knows what they're doing
  } else if (digits.startsWith(numericDialCode)) {
    digits = "00" + digits;
  } else if (digits.startsWith("0")) {
    digits = "00" + numericDialCode + digits.substring(1);
  } else {
    digits = "00" + numericDialCode + digits;
  }
  return digits;
}

export function formatPhoneForBlob(phone: string, countryCode: string) {
  const crmPhone = formatPhoneForCRM(phone, countryCode);
  return "+" + crmPhone.substring(2);
}

export function CountrySelect({ value, onChange, variant = "dark" }: { value: string; onChange: (val: string) => void; variant?: "dark" | "light" }) {
  const isLight = variant === "light";
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={`w-full hover:border-[#a855f7] transition-all h-10 ${isLight ? "bg-white border-black/10 text-[#111]" : "bg-white/5 border-white/10 text-white"}`}>
        <SelectValue placeholder="Select Country" />
      </SelectTrigger>
      <SelectContent className={`max-h-60 ${isLight ? "bg-white border-black/10 text-[#111]" : "bg-[#111] border-white/10 text-white"}`}>
        {countries.map((c) => (
          <SelectItem key={c.code} value={c.code} className={`cursor-pointer ${isLight ? "hover:bg-black/5 focus:bg-black/5" : "hover:bg-white/10 focus:bg-white/10"}`}>
            <span className="flex items-center gap-2">
              <span className="w-6 inline-block font-medium">{c.code}</span>
              <span className={`ml-auto text-xs ${isLight ? "text-black/40" : "text-white/40"}`}>{c.dialCode}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
