// We import various images so we need to tell typescript these are fine
declare module "*.svg" {
    const content: any;
    export default content;
}
declare module "*.jpg" {
    const content: any;
    export default content;
}
declare module "*.png" {
    const content: any;
    export default content;
}
