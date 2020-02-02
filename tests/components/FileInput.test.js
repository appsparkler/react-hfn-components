import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FileInput from '../../src/components/FileInput'
import {
  setFilesToUpload as setFilesToUpload2,
} from '../../src/components/FileInput'

configure({adapter: new Adapter()})

describe('setFilesToUpload function', () => {
  it(`should the method config.setFilesToUpload
    to have been called correctly`, () => {
    const [filesToUpload, setFilesToUpload] = [[], jest.fn()]
    const fileInputRef = {}
    const config = {
      filesToUpload,
      setFilesToUpload,
    }
    const evt = {
      target: {
        files: [
          new File(['foo'], 'file-1.txt'),
          new File(['bar'], 'file-2.txt'),
        ],
      },
    }
    setFilesToUpload2(config, fileInputRef, evt)
    expect(config.setFilesToUpload).toHaveBeenCalledTimes(1)
  })
})

describe('FileInput Rendering', () => {
  it('should correctly render FileInput component', () => {
    const wrapper = shallow(<FileInput />)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
