-- revoke-anon-insert-subscribers.sql
--
-- Make the verified vendr-subscribe edge function the ONLY way rows are created in
-- subscribers. The edge function uses the service role (bypasses RLS) after
-- verifying the Cloudflare Turnstile token; revoking the anon/authenticated INSERT
-- policy closes the direct browser-insert path.
--
-- The email validation that previously lived in the INSERT policy WITH CHECK is
-- re-added here as a TABLE CHECK constraint, so it still applies to the
-- service-role inserts (defense in depth).
--
-- DO NOT APPLY until the vendr-subscribe edge function is deployed AND
-- TURNSTILE_SECRET_KEY is set on the project. Applying earlier breaks the form.
-- Apply via the dashboard/SQL editor; not run automatically.

drop policy if exists "subscribers insert" on public.subscribers;

alter table public.subscribers
  add constraint subscribers_email_valid check (
    char_length(email) between 3 and 320
    and email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
  );
