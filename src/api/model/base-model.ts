export interface Response {
  /**
   * 状态码
   */
  code: number
  /**
   * 宠物信息
   */
  data: Pet
  [property: string]: any
}

/**
 * 宠物信息
 *
 * Pet
 */
export interface Pet {
  /**
   * 分组
   */
  category: Category
  /**
   * 宠物ID编号
   */
  id: number
  /**
   * 名称
   */
  name: string
  /**
   * 照片URL
   */
  photoUrls: string[]
  /**
   * 宠物销售状态
   */
  status: Status
  /**
   * 标签
   */
  tags: Tag[]
  [property: string]: any
}

/**
 * 分组
 *
 * Category
 */
export interface Category {
  /**
   * 分组ID编号
   */
  id?: number
  /**
   * 分组名称
   */
  name?: string
  [property: string]: any
}

/**
 * 宠物销售状态
 */
export enum Status {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold',
}

/**
 * Tag
 */
export interface Tag {
  /**
   * 标签ID编号
   */
  id?: number
  /**
   * 标签名称
   */
  name?: string
  [property: string]: any
}
