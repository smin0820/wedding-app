import React from 'react'

import classNames from 'classnames/bind'

import styles from './Calendar.module.scss'
import Section from '../shared/Section'

import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'

const cx = classNames.bind(styles)

export default function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div></div>
    </Section>
  )
}
