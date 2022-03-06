import { FC } from "react";
import InlineCode from "./InlineCode";
import { formatFilePath } from "./utils";

interface FilePathProps {
  path: string;
}

const FilePath: FC<FilePathProps> = ({ path }) => {
  return <InlineCode>{formatFilePath(path)}</InlineCode>;
};

export default FilePath;
