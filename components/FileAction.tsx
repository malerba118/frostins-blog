import { ComponentType, FC } from "react";
import { useSandpack } from "@codesandbox/sandpack-react";
import InlineCode from "./InlineCode";
import { Icon } from "@chakra-ui/react";
import {
  RiFileAddLine,
  RiFileEditLine,
  RiFileTransferLine,
  RiFileReduceLine,
} from "react-icons/ri";

interface FileReferenceProps {
  path: string;
  action: FileActionType;
  code?: string;
}

type FileActionType = "open" | "add" | "update" | "delete";

const icons = {
  open: RiFileTransferLine,
  add: RiFileAddLine,
  delete: RiFileReduceLine,
  update: RiFileEditLine,
};

const FileReference: FC<FileReferenceProps> = ({ path, action, code = "" }) => {
  const { sandpack } = useSandpack();

  return (
    <InlineCode
      display="inline-flex"
      onClick={() => {
        if (action === "open") {
          sandpack.openFile(path);
        } else if (action === "add") {
          sandpack.updateFile(path, code);
          sandpack.openFile(path);
        } else if (action === "update") {
          sandpack.updateFile(path, code);
          sandpack.openFile(path);
        } else if (action === "delete") {
          sandpack.closeFile(path);
          sandpack.deleteFile(path);
        }
      }}
      cursor="pointer"
      bg="purple.100"
      _hover={{
        bg: "purple.200",
      }}
      transition="all .2s"
      tabIndex={0}
      alignItems="center"
    >
      <Icon as={icons[action]} mr="1" />
      {path}
    </InlineCode>
  );
};

export default FileReference;
