import { DocumentIcon, DownloadIcon } from "./Icons";
import { buttonClass, eyebrowClass } from "../lib/ui";
import { school } from "../lib/school";

type AdmissionFormDownloadProps = {
  /** "wide" suits a main column, "compact" suits a sidebar. */
  layout?: "wide" | "compact";
};

const returnOptions = [
  { label: `Email: ${school.admissionsEmail}`, className: "bg-brand-sky" },
  { label: `WhatsApp: ${school.phone}`, className: "bg-brand-aqua" },
  { label: "Or hand it in at the school office", className: "bg-brand-butter" },
];

/** Card that lets families download the printable admission form and return it by scan. */
export function AdmissionFormDownload({ layout = "wide" }: AdmissionFormDownloadProps) {
  const downloadLink = (
    <a href={school.admissionFormPath} download className={buttonClass("primary", layout === "wide" ? "regular" : "small")}>
      <DownloadIcon />
      Download form (PDF, 2 pages)
    </a>
  );

  if (layout === "compact") {
    return (
      <div className="flex flex-col gap-3.5 rounded-[28px] border-2 border-brand-teal bg-white p-7">
        <div className="flex items-center gap-3.5">
          <DocumentIcon size={56} className="shrink-0" />
          <div>
            <div className="text-[13px] font-extrabold tracking-[0.08em] text-brand-teal">CAN'T VISIT IN PERSON?</div>
            <h3 className="font-display text-[22px] font-bold leading-[1.15]">Download the admission form</h3>
          </div>
        </div>
        <p className="text-[15px] text-brand-muted">
          Print it, fill it in, scan it with your phone and send it back to us. You can start the process
          without visiting first.
        </p>
        {downloadLink}
        <div className="text-sm leading-relaxed text-brand-muted">
          <strong className="text-brand-ink">Send it back by:</strong>
          <br />
          Email: {school.admissionsEmail}
          <br />
          WhatsApp: {school.phone}
          <br />
          Or hand it in at the school office
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[22px] rounded-[28px] border-2 border-brand-teal bg-white p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-x-7 gap-y-5">
        <DocumentIcon size={64} className="shrink-0" />
        <div className="flex min-w-[240px] flex-[1_1_280px] flex-col items-start gap-2">
          <div className={eyebrowClass}>CAN'T VISIT IN PERSON?</div>
          <h2 className="font-display text-[28px] font-extrabold leading-[1.1]">Download the admission form</h2>
          <p className="text-brand-muted">
            Print it, fill it in, scan it with your phone and send it back to us. You can start the process
            without visiting first.
          </p>
        </div>
        {downloadLink}
      </div>
      <div className="border-t border-brand-line pt-[18px]">
        <div className="mb-2.5 font-extrabold">Send the filled form back by</div>
        <div className="flex flex-wrap gap-3">
          {returnOptions.map((option) => (
            <span key={option.label} className={`max-w-full rounded-full px-[18px] py-2 text-[15px] font-bold [overflow-wrap:anywhere] ${option.className}`}>
              {option.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
