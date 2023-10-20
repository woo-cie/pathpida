export const projects = [
  { dir: 'nextjs', output: 'out/lib', nodeVer: 14 },
  { dir: 'nextjs-appdir', output: 'out/lib', nodeVer: 16 },
  { dir: 'nextjs-src-appdir', output: 'src/out/lib', nodeVer: 16 },
  { dir: 'nextjs-basepath', output: 'out/lib', nodeVer: 14 },
  { dir: 'nextjs-custom-ext', output: 'out/lib', nodeVer: 14 },
  { dir: 'nextjs-src', output: 'src/out/lib', nodeVer: 14 },
  { dir: 'nextjs-stable-appdir', output: 'out/lib', nodeVer: 16 },
  { dir: 'nuxtjs', output: 'plugins/util', nodeVer: 14 },
  { dir: 'nuxtjs-basepath', output: 'plugins/util', nodeVer: 14 },
  { dir: 'nuxtjs-no-slash', output: 'plugins/util', nodeVer: 14 },
  { dir: 'nuxtjs-src', output: 'client/plugins/util', nodeVer: 14 }
].map(
  baseProject =>
    [
      baseProject.dir,
      baseProject,
      [
        [
          'undefined',
          { ...baseProject, output: undefined, enableStatic: true, ignorePath: undefined }
        ],
        [
          'basic',
          {
            ...baseProject,
            output: `${baseProject.output}/basic`,
            enableStatic: false,
            ignorePath: '.pathpidaignore'
          }
        ],
        [
          'static',
          {
            ...baseProject,
            output: `${baseProject.output}/static`,
            enableStatic: true,
            ignorePath: undefined
          }
        ],
        [
          'ignore',
          {
            ...baseProject,
            output: `${baseProject.output}/ignore`,
            enableStatic: true,
            ignorePath: '.pathpidaignore'
          }
        ]
      ]
    ] as const
);
