'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { submitInquiry } from '@/lib/klaviyo'

type InquiryFormProps = {
  source: string
  productName?: string
  submitLabel?: string
}

export default function InquiryForm({
  source,
  productName,
  submitLabel = 'Submit Inquiry',
}: InquiryFormProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const tracked = await submitInquiry({
        email,
        firstName,
        lastName,
        source,
        productName,
      })

      if (!tracked) {
        setError('Unable to submit right now. Please email info@dewarguitars.com directly.')
        return
      }

      setIsSubmitted(true)
    } catch {
      setError('Something went wrong. Please email info@dewarguitars.com directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-none border border-dewar-red/30 bg-dewar-red/5 p-8 text-center">
        <h3 className="type-section-title text-on-dark-primary mb-3">Thank you</h3>
        <p className="type-body text-on-dark-secondary">
          Your inquiry has been received. We&apos;ll be in touch soon about the 2026 Collection.
        </p>
      </div>
    )
  }

  const fieldClassName =
    'rounded-none border-white/25 bg-ink/60 text-on-dark-primary placeholder:text-on-dark-subtle focus-visible:ring-dewar-red'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor={`${source}-first-name`} className="type-body text-on-dark-secondary">
            First name
          </label>
          <Input
            id={`${source}-first-name`}
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
            autoComplete="given-name"
            className={fieldClassName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${source}-last-name`} className="type-body text-on-dark-secondary">
            Last name
          </label>
          <Input
            id={`${source}-last-name`}
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
            autoComplete="family-name"
            className={fieldClassName}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${source}-email`} className="type-body text-on-dark-secondary">
          Email
        </label>
        <Input
          id={`${source}-email`}
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete="email"
          spellCheck={false}
          className={fieldClassName}
        />
      </div>

      {error ? (
        <p className="type-body text-dewar-red" aria-live="polite">{error}</p>
      ) : null}

      <Button
        type="submit"
        variant="luxury"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting…' : submitLabel}
      </Button>
    </form>
  )
}
