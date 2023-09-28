interface ErrorMessageProps {
    error: string
  }

export function Error({error}: ErrorMessageProps) {

    return(
        <div className="text-center text-red-600">{error}</div>
    )
}