'use client';

import { useState } from 'react';
import { LinkParentModal } from '@/components/kids/LinkParentModal';

interface ParentsSectionProps {
  kidName: string;
}

export function ParentsSection({ kidName }: ParentsSectionProps) {
  const [showLinkParent, setShowLinkParent] = useState(false);

  return (
    <>
      <div className="bg-card border border-line rounded-[16px] px-[18px] py-4">
        <div className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#8A7C6D] mb-[14px]">
          PADRES VINCULADOS
        </div>
        <div className="text-[14px] text-muted text-center py-4">
          La vinculación de padres estará disponible próximamente.
        </div>
        <button
          type="button"
          onClick={() => setShowLinkParent(true)}
          className="flex items-center gap-[12px] pt-2 bg-none border-none cursor-pointer p-0"
        >
          <span className="w-10 h-10 rounded-full border-[1.5px] border-dashed border-[#D8CBBA] flex items-center justify-center text-[#B0A290]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
          <span className="font-extrabold text-[14.5px] text-[#C5503A]">
            Vincular otro padre
          </span>
        </button>
      </div>
      <LinkParentModal
        open={showLinkParent}
        kidName={kidName}
        onClose={() => setShowLinkParent(false)}
        onLink={() => {}}
      />
    </>
  );
}
