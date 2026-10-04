const apiReference = 'https://api.qaragon.com/'
const apiContract = 'https://api.qaragon.com/openapi.json'
const mcpEndpoint = 'https://mcp.qaragon.com/mcp'

export default function DeveloperTools() {
  return (
    <section id="developers" className="relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border-t border-slate-800 pt-16 md:pt-24 pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300 pb-3">For tenant developers</p>
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Start with the contract. Build with your AI tools.
            </h2>
            <p className="text-lg text-slate-400">
              Explore Qaragon’s tenant API directly, or connect an MCP-compatible assistant to search operations and integration guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <article className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/80 p-6 md:p-8">
              <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300 pb-4">OpenAPI 3.0</p>
                <h3 className="text-xl font-bold text-slate-100 pb-3">Interactive API reference</h3>
                <p className="text-sm leading-6 text-slate-400 pb-6">
                  Browse the tenant-facing contract, including operations, authentication, parameters, and request and response schemas.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-200 hover:text-white transition"
                  href={apiReference}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Browse the API reference <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="ml-5 inline-flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-slate-200 transition"
                  href={apiContract}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenAPI JSON <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/80 p-6 md:p-8">
              <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-indigo-500/15 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300 pb-4">Model Context Protocol</p>
                <h3 className="text-xl font-bold text-slate-100 pb-3">Qaragon MCP server</h3>
                <p className="text-sm leading-6 text-slate-400 pb-5">
                  Connect your MCP-compatible AI client to search API operations, inspect their schemas, and find SDK and webhook guidance.
                </p>
                <div className="rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 pb-1">Streamable HTTP endpoint</p>
                  <code className="break-all text-sm text-slate-200">{mcpEndpoint}</code>
                </div>
                <p className="text-xs text-slate-500 pt-3">Use this URL in your MCP client’s server configuration.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
