import { ARCHIVE_SEARCH_DATA } from "@/constants";
import Fuse from "fuse.js";

export const searchArchiveFuse = new Fuse(ARCHIVE_SEARCH_DATA);
