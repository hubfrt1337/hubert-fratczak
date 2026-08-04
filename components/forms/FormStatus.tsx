import type { SubmitStatus } from "@/lib/submitForm";

export function FormStatus({
  status,
  error,
  successMessage,
}: {
  status: SubmitStatus;
  error: string | null;
  successMessage: string;
}) {
  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
      >
        {successMessage}
      </p>
    );
  }

  if (status === "error" && error) {
    return (
      <p
        role="alert"
        className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
      >
        {error}
      </p>
    );
  }

  return null;
}
