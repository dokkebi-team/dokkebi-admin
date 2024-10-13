import { searchArchiveFuse } from "@/modules/search-archive";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Chip from "./Chip";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export interface SearchInputProps {
  onSelectTag: (tag: string) => void;
}

const SearchInput = ({ onSelectTag }: SearchInputProps) => {
  const [keyword, setKeyword] = useState<string>();
  const result = useMemo(() => {
    if (!keyword) {
      return [];
    }

    const adjustedKeyword = keyword.replace(/^\#+/g, "");

    return searchArchiveFuse.search(adjustedKeyword, {
      limit: 5,
    });
  }, [keyword]);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full px-4 text-center">
        <input
          className="inline-flex h-[3rem] w-full rounded-[0.75rem] border-2 border-[#005212] bg-white px-3 py-2 text-center text-[1.25rem] text-[#005212] shadow-[0_6px_0_0_rgba(8,214,115,0.7)] outline-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#005212]/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:h-[4.75rem] md:w-[25rem] md:text-[1.75rem]"
          placeholder="검색"
          value={keyword}
          onChange={(e) => {
            const value = e.target.value;

            const trimmed = value.trim();

            if (!trimmed) {
              setKeyword(trimmed);
              return;
            }

            if (trimmed === "#") {
              setKeyword(undefined);
              return;
            }

            setKeyword(`#${trimmed}`.replace(/^\#+/g, "#"));
          }}
        />
      </div>
      <ScrollArea className="mt-5 h-10 w-full md:h-12 md:w-auto">
        <div className="flex w-max flex-nowrap gap-x-4 px-4 pb-2">
          {result.map((item, index) => (
            <motion.div
              key={item.item}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Chip
                onClick={() => {
                  onSelectTag(item.item);
                }}
              >
                #{item.item}
              </Chip>
            </motion.div>
          ))}
        </div>
        <ScrollBar className="px-4" orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default SearchInput;
