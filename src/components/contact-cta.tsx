import { Mail } from "lucide-react";

interface ContactCTAProps {
  email: string;
}

export function ContactCTA({ email }: ContactCTAProps) {
  return (
    <section id="say-hi" className="mt-8 pt-6 border-t border-[var(--foreground)]/10">
      <p className="text-sm text-[var(--foreground)]/80">
        I&apos;d love to connect if you&apos;re in the field or want to collaborate.{" "}
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-1.5 text-[var(--pastel-blue-dark)] font-medium hover:underline transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={14} />
          Get in touch
        </a>
      </p>
    </section>
  );
}
