import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import { CreativesSection } from "@/components/creatives-section";
import { creativesData } from "@/data/creatives";
import { SnoopyCorner } from "@/components/snoopy-corner";
import { ContactCTA } from "@/components/contact-cta";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TechMarquee } from "@/components/tech-marquee";
import { CursorGlow } from "@/components/cursor-glow";
import { NeuralBg } from "@/components/neural-bg";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <NeuralBg />
      <CursorGlow />
      <div className="max-w-screen-lg mx-auto px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            <div className="md:sticky top-12 space-y-8 md:pr-6 md:border-r border-[var(--foreground)]/10">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24 pl-0 md:pl-2 rounded-lg md:bg-[var(--butter)]/30 md:px-4 md:py-1">
            <div className="overflow-hidden border-b border-[var(--foreground)]/10 pb-4 -mb-16">
              <TechMarquee />
            </div>

            {aboutMe.description && (
              <ScrollReveal>
                <section className="pb-2">
                  <p
                    className="font-serif text-sm leading-relaxed text-[var(--foreground)]/90 [&_a]:text-[var(--foreground)] [&_a:hover]:underline"
                    dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                  />
                  <ContactCTA email={aboutMe.email} />
                </section>
              </ScrollReveal>
            )}

            {sectionOrder.map((sectionName) => {
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <ScrollReveal key={sectionName}>
                        <section>
                          <h2 className="font-serif text-lg mb-12 tracking-wide uppercase text-[var(--foreground)]/90">
                            News
                          </h2>
                          <div className="space-y-12">
                            {newsData.map((news, index) => (
                              <div key={index}>
                                <NewsEntry news={news} />
                              </div>
                            ))}
                          </div>
                        </section>
                      </ScrollReveal>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <ScrollReveal key={sectionName}>
                        <section>
                          <h2 className="font-serif text-lg mb-12 tracking-wide uppercase text-[var(--foreground)]/90">
                            Education
                          </h2>
                          <div className="space-y-12 stagger-children">
                            {educationData.map((education, index) => (
                              <ScrollReveal key={index}>
                                <EducationEntry education={education} />
                              </ScrollReveal>
                            ))}
                          </div>
                        </section>
                      </ScrollReveal>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <ScrollReveal key={sectionName}>
                        <section>
                          <h2 className="font-serif text-lg mb-12 tracking-wide uppercase text-[var(--foreground)]/90">
                            Experience
                          </h2>
                          <div className="space-y-12">
                            {experienceData.map((experience, index) => (
                              <ScrollReveal key={index}>
                                <ExperienceEntry experience={experience} />
                              </ScrollReveal>
                            ))}
                          </div>
                        </section>
                      </ScrollReveal>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <ScrollReveal key={sectionName}>
                        <section>
                          <h2 className="font-serif text-lg mb-12 tracking-wide uppercase text-[var(--foreground)]/90">
                            Recent Projects
                          </h2>
                          <div className="space-y-12">
                            {portfolioData.map((portfolio, index) => (
                              <ScrollReveal key={index}>
                                <PortfolioEntry portfolio={portfolio} />
                              </ScrollReveal>
                            ))}
                          </div>
                        </section>
                      </ScrollReveal>
                    )
                  );
                case Section.Creatives:
                  return (
                    <ScrollReveal key={sectionName}>
                      <section>
                        <CreativesSection creatives={creativesData} />
                      </section>
                    </ScrollReveal>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
