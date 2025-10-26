import {remark} from 'remark'
import remarkToc from 'remark-toc'
import {readFile, writeFile} from "node:fs/promises";

const result = await remark()
  .use(remarkToc)
  .process(await readFile('./README.md', 'utf-8'))

await writeFile('./README.md', String(result), 'utf-8')
