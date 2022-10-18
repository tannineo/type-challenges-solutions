export type IsEqual<A, B> = (<X>() => X extends A ? 1 : 2) extends <
  X,
>() => X extends B ? 1 : 2
  ? true
  : false
