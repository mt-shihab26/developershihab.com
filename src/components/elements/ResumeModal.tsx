import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Resume from "./Resume";

const ResumeModal = () => {
    return (
        <Dialog open={true}>
            <DialogTrigger asChild>
                <Button variant="outline">View Resume</Button>
            </DialogTrigger>
            <DialogContent className="max-w-screen max-h-screen overflow-y-auto">
                <Resume />
            </DialogContent>
        </Dialog>
    );
};

export default ResumeModal;
