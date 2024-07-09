import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";

const SearchModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const { status } = useSession();

  return (
    <div className="flex flex-col gap-2">
      <Button onPress={onOpen} className="bg-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-80 flex items-end text-gray-500">
            Search Your Advertise ...
          </div>
          <Search className="rotate-90 text-gray-500" />
        </div>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={scrollBehavior}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <p>
                   {status === "authenticated" ? "Lorem ipsum" : "Please First Login"}  
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SearchModal;
