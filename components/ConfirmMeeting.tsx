import { Button } from "@/components/ui/button";

const DAYS_EN = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
] as const;

export type TimeSlot = string;

/** Formats a slot like "2-10" as "Wednesday 10:00 - 11:00" */
export function formatMeetingTimeEnglish(slot: TimeSlot): string {
  const [d, h] = slot.split("-").map(Number);
  const day = DAYS_EN[d] ?? "Day";
  return `${day} ${h}:00 - ${h + 1}:00`;
}

type ConfirmMeetingActionsProps = {
  selectedSlot: TimeSlot | null;
  confirmedMeetingTime: TimeSlot | null;
  onConfirm: () => void;
};

export function ConfirmMeetingActions({
  selectedSlot,
  confirmedMeetingTime,
  onConfirm,
}: ConfirmMeetingActionsProps) {
  return (
    <div className="mt-6 space-y-4">
      <Button
        type="button"
        onClick={onConfirm}
        disabled={!selectedSlot}
        size="default"
        className="w-full sm:w-auto"
      >
        Confirm this time
      </Button>

      {confirmedMeetingTime && (
        <div
          className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/50"
          role="status"
        >
          <p className="font-medium text-emerald-900 dark:text-emerald-100">
            ✅ Meeting Confirmed
          </p>
          <p className="mt-1 text-sm text-emerald-800 dark:text-emerald-200">
            Time: {formatMeetingTimeEnglish(confirmedMeetingTime)}
          </p>
        </div>
      )}
    </div>
  );
}
