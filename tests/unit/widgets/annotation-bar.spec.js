import { mount } from '@vue/test-utils'
import AnnotationBar from '../../../src/components/pages/playlists/AnnotationBar'

describe('AnnotationBar', () => {
  const wrapper = mount(AnnotationBar, {
    propsData: {
      annotations: [
        { time: 10 },
        { time: 20 }
      ],
      maxDurationRaw: 100,
      nbFrames: 500,
      width: 100
    }
  })

  describe('Mount', () => {
    test('Ensure marks are there', () => {
      const marks = wrapper.findAll('.annotation-mark')
      expect(marks).toHaveLength(2)
      expect(marks.at(0).element.style.left).toEqual('7px')
    })
  })

  describe('Methods', () => {
    test('getAnnotationPosition', () => {
      let position = wrapper.vm.getAnnotationPosition({ time: 10 })
      expect(position).toEqual(7)
      position = wrapper.vm.getAnnotationPosition({ time: 20 })
      expect(position).toEqual(17)
    })
  })
})
