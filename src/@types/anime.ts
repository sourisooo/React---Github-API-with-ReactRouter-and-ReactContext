export type AnimeApiResponse = {
  pagination: Pagination;
  data: Anime[];
}

export type Pagination = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

export type Items = {
  count: number;
  total: number;
  per_page: number;
}

export type Anime = {
  full_name:string;
  images:Images;
  owner:any;
  watchers:number;
  description:string

}

export type Images = {
  jpg: Jpg;
  webp: Webp;
}

export type Jpg = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export type Webp = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export type Trailer = {
  youtube_id?: string | null;
  url?: string | null;
  embed_url?: string | null;
  images: Images2;
}

export type Images2 = {
  image_url?: string | null;
  small_image_url?: string | null;
  medium_image_url?: string | null;
  large_image_url?: string | null;
  maximum_image_url?: string | null;
}

export type Title = {
  type: string;
  title: string;
}

export type Aired = {
  from?: string | null;
  to?: string | null;
  prop: Prop;
  string: string;
}

export type Prop = {
  from: From;
  to: To;
}

export type From = {
  day?: number | null;
  month?: number | null;
  year?: number | null;
}

export type To = {
  day?: number | null;
  month?: number | null;
  year?: number | null;
}

export type Broadcast = {
  day?: string | null;
  time?: string | null;
  timezone?: string | null;
  string?: string | null;
}

export type Producer = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export type Licensor = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export type Studio = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export type Genre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export type Theme = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export type Demographic = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
