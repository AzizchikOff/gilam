import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-beige-100 px-4">
          <div className="text-center max-w-md">
            <p className="font-display text-5xl text-terracotta-500 mb-4">Xatolik</p>
            <p className="font-body text-charcoal-800 mb-8">
              Sahifani yuklashda muammo yuz berdi. Iltimos, qayta urinib ko'ring.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Qayta yuklash
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
