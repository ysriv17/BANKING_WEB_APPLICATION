import {
    Sheet,
    SheetContent,
    SheetDescription, 
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { useNewAccounts } from "../hooks/use-new-accounts"

export const NewAccountSheet = () => {
    const {isOpen, onClose } = useNewAccounts();
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        New Account
                    </SheetTitle>
                    <SheetDescription>
                        Create a new Account to Track your Transctions.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}