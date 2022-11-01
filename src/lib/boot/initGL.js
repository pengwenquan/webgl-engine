export const initGL = () => {
  const canvas = document.getElementById('canvas');
  const gl = canvas.getContext('webgl');
  if (!gl) {
    throw new Error('gl初始化失败');
  }

  return gl;
}