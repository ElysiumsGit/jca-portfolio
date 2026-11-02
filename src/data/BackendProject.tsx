const projects = [
  {
    title: 'Storewatch — clarity at the API layer.',
    description:
      'A developer tooling concept for API observability. Storewatch provides a clear view of API endpoints, responses, and performance metrics, helping developers understand and optimize their API interactions.',
    category: 'CONCEPT / DEVELOPER TOOLING',
    technologies: ['TypeScript', 'Express', 'OpenAPI'],
    href: '/projects/storewatch',
    preview: {
      brand: 'storewatch_',
      version: 'SANDBOX / v1.0',
      method: 'GET',
      endpoint: '/v1/projects?status=active',
      status: '200 OK',
      response: `{
  "data": [
    {
      "name": "Design system",
      "status": "active"
    }
  ]
}`,
      time: '42 ms',
      size: '1.28 KB',
      label: 'DEMO RESPONSE',
    },
  },
]

export default projects;