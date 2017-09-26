self.addEventListener('fetch', async ev => {
  if (!ev.request.url.endsWith('.js')) return
  const _res = fetch(ev.request)
  const headers = _res.headers
  headers['Content-Type'] = 'application/javascript'
  ev.respondWith(new Response(await _res.arrayBuffer(), {
    status: _res.status,
    statusText: _res.statusText,
    headers
  }))
})