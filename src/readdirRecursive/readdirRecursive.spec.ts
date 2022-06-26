import { readdirRecursive } from '.'
import { writeFile, rmdir, mkdir } from 'fs/promises'
describe('readdirRecursive', () => {
  beforeAll(async () => {
    await mkdir('./parent-dir')
    await writeFile('./parent-dir/first-file', '')
    await writeFile('./parent-dir/second-file', '')
    await mkdir('./parent-dir/child-dir')
    await writeFile('./parent-dir/child-dir/third-file', '')
  })

  afterAll(async () => {
    await rmdir('./parent-dir', { recursive: true })
  })

  it('get filenames in target dir', async () => {
    /**
     * Given
     */
    const targetDir = './parent-dir'
    const expectedPaths = [
      'parent-dir/first-file',
      'parent-dir/second-file',
      'parent-dir/child-dir/third-file',
    ]

    /**
     * When
     */
    const paths = await readdirRecursive(targetDir)

    /**
     * Then
     */
    paths.forEach((path) => expect(expectedPaths).toContain(path))
  })
})
