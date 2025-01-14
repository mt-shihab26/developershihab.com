import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import Resume from "./Resume";

const ResumeModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">View Resume</Button>
            </DialogTrigger>
            <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Professional Resume</DialogTitle>
                </DialogHeader>
                <Resume />
            </DialogContent>
        </Dialog>
    );
};

export default ResumeModal;
