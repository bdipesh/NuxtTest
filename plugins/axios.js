export default function ({ $axios, redirect, store, app }) {
  $axios.onRequest(config => {
    config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;application/json'
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      redirect('/error/404')
    } else if (code === 403) {
      redirect('/error/403')
    } if (code === 500) {
      redirect('/error/500')
    } else if (code === 401) {
      redirect('/account/login')
    }
  })
}
