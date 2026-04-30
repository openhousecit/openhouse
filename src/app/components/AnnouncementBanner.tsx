const announcementText =
  'Due to unforeseen circumstances, Cambrian Open House has been tentatively postponed. We regret the inconvenience caused and will update you with the revised dates soon.';

export default function AnnouncementBanner() {
  return (
    <div className="sticky top-0 z-[200] overflow-hidden border-b border-[#ffd2a3]/30 bg-[#140c02] text-[#fff2de] backdrop-blur-xl">
      <div className="flex h-11 items-center sm:h-12">
        <div className="announcement-track flex min-w-max items-center gap-8 px-4">
          {[0, 1, 2].map((item) => (
            <span
              key={item}
              className="font-['OSK'] text-[10px] uppercase tracking-[0.28em] sm:text-xs"
            >
              {announcementText}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
