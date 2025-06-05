import { type ZodErrorMap } from 'zod'
import i18n from '../locales/i18n'
import { TRANSLATION_KEYS as T } from '../constants/translationKeys'

export const zodI18nMap: ZodErrorMap = (issue, _ctx) => {
  const t = i18n.t.bind(i18n)

  switch (issue.code) {
    case 'invalid_type':
      return { message: t(T.VALIDATION.REQUIRED) }

    case 'too_small':
      return { message: t(T.VALIDATION.TOO_SHORT, { min: issue.minimum }) }

    case 'invalid_string':
      if (issue.validation === 'email') {
        return { message: t(T.VALIDATION.EMAIL) }
      }
      return { message: t(T.VALIDATION.INVALID) }

    default:
      return { message: t(T.VALIDATION.DEFAULT) }
  }
}
