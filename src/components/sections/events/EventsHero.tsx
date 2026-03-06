import { Button } from "@/components/ui/button";
import ComboboxAwards from "../awards/ComboboxAwards";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export default function EventsHero() {
  return (
    <section className="gap-8">
      <div className="flex items-center">
        <div className=" flex flex-col lg:flex-row w-full justify-between lg:items-center gap-6 lg:gap-0">
          <div className="flex w-full">
            <h1 className="max-w-[20ch]">Podelitev Nagrad Zvezde Oriona </h1>
          </div>
          <div className="flex lg:justify-end w-full lg:w-260">
            <ComboboxAwards />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:items-start gap-8">
        <p>
          Kratek uvodni tekst. Neque lobortis nunc suspendisse aliquet accumsan
          laoreet nibh fusce inceptos iaculis orci. Pretium pede mattis mollis
          praesent odio eleifend egestas. Tempor nascetur orci malesuada lacinia
          lectus est litora adipiscing vehicula pede. Libero enim cubilia turpis
          condimentum lacinia lobortis maximus quam facilisis bibendum.
        </p>
        <div className="flex flex-col gap-2">
          <p>Datum: 18. 5. 2025</p>
          <p>Lokacija: Klub CD, Ljubljana</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Več informacij o podelitvi</Button>
          </DialogTrigger>
          <DialogContent className=" bg-white text-black">
            <DialogTitle className={"hidden"}></DialogTitle>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
