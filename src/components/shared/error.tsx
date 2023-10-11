interface ErrorMessageProps {
    error: string
  }

export function ErrorMessage({error}: ErrorMessageProps) {

    return(
        <div className="text-center text-red-600">{error}</div>
    )
}