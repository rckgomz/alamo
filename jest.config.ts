import { type JestConfigWithTsJest, createDefaultPreset } from 'ts-jest'

const defaultPreset = createDefaultPreset()

const jestConfig: JestConfigWithTsJest = {
  ...defaultPreset,
  verbose: true
}

export default jestConfig