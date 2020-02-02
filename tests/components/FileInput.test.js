import React from 'react'
import {mount, configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FileInput from '../../src/components/FileInput'

let FileInputWrapper; let filesToUpload; let setFilesToUpload

configure({adapter: new Adapter()})

beforeEach(() => {
  FileInputWrapper = () => {
    [filesToUpload, setFilesToUpload] = React.useState([])
    const fileInputRef = React.useRef()
    const config = {
      filesToUpload,
      setFilesToUpload,
      classNames: 'class-1 class-2',
      multiple: true,
    }
    return (
      <form>
        <FileInput config={config} ref={ fileInputRef } />
      </form>
    )
  }
})

describe('FileInput Component Rendering', ()=> {
  it('should render correctly', ()=> {
    const wrapper = mount(<FileInputWrapper />)
    expect(wrapper.html()).toMatchSnapshot()
    const fileInput = wrapper.find('input')
    fileInput.at(0).simulate('input', {target: {files: [
      new File(['foo'], 'file-1.txt'),
      new File(['foo'], 'file-2.txt'),
    ]}})
    expect(wrapper.html()).toMatchSnapshot()
    expect(filesToUpload.length).toEqual(2)
  })
})

describe('FileInput Rendering', () => {
  it(`should render correctly with
    classNames and multiple configuration`, () => {
    const config = {
      classNames: 'class-1 class-2',
      multiple: false,
    }
    const wrapper = shallow(<FileInput config={ config } />)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it(`should render correctly without
    'classNames' and 'multiple' properties
    passed to config`, () => {
    const config = {
      classNames: null,
      multiple: false,
    }
    const wrapper = shallow(<FileInput config={config}/>)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
