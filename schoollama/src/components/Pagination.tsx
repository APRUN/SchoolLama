const Pagination = () => {
  return (
    <div className=''>
        <div className="flex items-center p-4 justify-between text-gray-500">
            <button disabled className="py-2 px-4 rounded-md bg-slate-200 font-semibold text-xs disabled:cursor-not-allowed">Prev</button>
            <div className="flex items-center gap-2 text-sm">
                <button className="px-2 bg-lamaSky rounded-md">1</button>
                <button className="px-2 rounded-sm">2</button>
                <button className="px-2 rounded-sm">3</button>
                ...
                <button className="px-2 rounded-sm">10</button>
            </div>
            <button className="py-2 px-4 rounded-md bg-slate-200 font-semibold text-xs disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
        </div>
    </div>
  )
}

export default Pagination