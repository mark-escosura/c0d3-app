import React from 'react'
import { render, screen } from '@testing-library/react'
import NavLink from './NavLink'
import '@testing-library/jest-dom'
import Link from 'next/link'
describe('NavLink Component', () => {
  test('Should render with active class when active', () => {
    const { container } = render(
      <NavLink path="/" activePath={true}>
        Link
      </NavLink>
    )
    expect(container.querySelector('.active')).not.toBeNull()
  })

  test('Should render without active class when not active', () => {
    const { container } = render(<NavLink path="/">Link</NavLink>)
    expect(container.querySelector('.active')).toBeNull()
  })
  test('Should render external link when path doesnt start with "/"', () => {
    render(<NavLink path="imExternal">Link</NavLink>)
    expect(screen.getByRole('link', { name: 'Link' })).toHaveAttribute(
      'target',
      '_blank'
    )
  })
  test('Should render nothing if path is falsy ', () => {
    const { container } = render(<NavLink path="">Link</NavLink>)
    expect(container.childNodes.length).toBe(0)
  })
})
