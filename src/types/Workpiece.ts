import type Color from '@/types/Color'

// WORKPIECE - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// the Workpiece type is used to type workpiece information sent via socket or
// stored in a game report
export type Workpiece = {
  id: number // as retrieved by barcode scanner
  name: string // usually "WP-genNUMBER"
  order: number
  team: Color

  holding: boolean // if true, robot_holding is valid, else at_machine and at_side
  robot_holding: number
  at_machine: string // e.g. 'C-CS1'
  at_side: 'INPUT' | 'OUTPUT' | 'SLIDE' | 'LEFT' | 'MIDDLE' | 'RIGHT' // left middle and right = position in shelf

  unknown_action: boolean // if true, this was not communicated but generated by the refbox because this or something similar has had to happen

  base_color: string
  ring_colors: string[]
  cap_color: string
}

export default Workpiece