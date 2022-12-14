import { RefObject, useEffect, useRef, useState } from "react"

type UseIntersectionObserverOptions = {
  threshold?: number
  rootMargin?: string
  enabled?: boolean
  once?: boolean
}

export const useInView = (props: UseIntersectionObserverOptions = {}): [RefObject<HTMLElement>, boolean] => {
  const { threshold = 0.5, rootMargin, enabled = true, once = false } = props

  const [inView, setInview] = useState(false)

  const ref: RefObject<HTMLElement> = useRef(null)
  useEffect(() => {
    if (!enabled) return

    let observer: IntersectionObserver
    if (ref.current && typeof window !== "undefined") {
      observer = new IntersectionObserver(
        ([element]) => {
          setInview(element.isIntersecting)

          if (once && element.isIntersecting) {
            observer.disconnect()
          }
        },
        {
          threshold: threshold,
          rootMargin,
        },
      )
      observer.observe(ref.current)
    }

    return () => {
      if (observer) observer.disconnect()
    }
  }, [enabled, ref])

  return [ref, inView]
}
