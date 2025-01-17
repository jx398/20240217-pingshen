const data = [
  {
    id: '1',
    parentId: '0',
    name: '2主体资格',
    title: '2主体资格',
    text: '2主体资格',
    value: '2',
    rank: 1,
    children: [
      {
        id: '2',
        parentId: '1',
        name: '★2.1生产合法性',
        title: '2.1生产合法性',
        text: '2.1生产合法性',
        value: '2.1',
        rank: 2,
        children: [],
      },

      {
        id: '3',
        parentId: '1',
        name: '★2.2生产场所',
        title: '2.2生产场所',
        text: '2.2生产场所',
        value: '2.2',
        rank: 2,
        children: [],
      },
    ],
  },

  {
    id: '4',
    parentId: '0',
    name: '3质量管理体系',
    title: '3质量管理体系',
    text: '3质量管理体系',
    value: '3',
    rank: 1,
    children: [
      {
        id: '5',
        parentId: '4',
        name: '3.1管理体系',
        title: '3.1管理体系',
        text: '3.1管理体系',
        value: '3.1',
        rank: 2,
        children: [
          {
            id: '6',
            parentId: '5',
            name: '3.1.1QMS机构',
            title: '3.1.1QMS机构',
            text: '3.1.1QMS机构',
            value: '3.1.1',
            rank: 3,
            children: [],
          },

          {
            id: '7',
            parentId: '5',
            name: '3.1.2QMS文件  ',
            title: '3.1.2QMS文件  ',
            text: '3.1.2QMS文件  ',
            value: '3.1.2',
            rank: 3,
            children: [],
          },
        ],
      },
      {
        id: '8',
        parentId: '7',
        name: '3.2内部审核与管理评审',
        title: '3.2内部审核与管理评审',
        text: '3.2内部审核与管理评审',
        value: '3.2',
        rank: 2,
        children: [
          {
            id: '9',
            parentId: '8',
            name: '3.2.1内部审核制度',
            title: '3.2.1内部审核制度',
            text: '3.2.1内部审核制度',
            value: '3.2.1',
            rank: 3,
            children: [],
          },

          {
            id: '10',
            parentId: '8',
            name: '3.2.2内部审核内容',
            title: '3.2.2内部审核内容',
            text: '3.2.2内部审核内容',
            value: '3.2.2',
            rank: 3,
            children: [],
          },

          {
            id: '11',
            parentId: '8',
            name: '3.2.3管理评审内容',
            title: '3.2.3管理评审内容',
            text: '3.2.3管理评审内容',
            value: '3.2.3',
            rank: 3,
            children: [],
          },

          {
            id: '12',
            parentId: '8',
            name: '3.2.4发现问题纠正',
            title: '3.2.4发现问题纠正',
            text: '3.2.4发现问题纠正',
            value: '3.2.4',
            rank: 3,
            children: [],
          },
        ],
      },
    ],
  },

  {
    id: '13',
    parentId: '0',
    name: '4管理职责',
    title: '4管理职责',
    text: '4管理职责',
    value: '4',
    rank: 1,
    children: [
      {
        id: '14',
        parentId: '13',
        name: '4.1安标工作负责人',
        title: '4.1安标工作负责人',
        text: '4.1安标工作负责人',
        value: '4.1',
        rank: 2,
        children: [
          {
            id: '15',
            parentId: '14',
            name: '4.1.1指定安标工作负责人',
            title: '4.1.1指定安标工作负责人',
            text: '4.1.1指定安标工作负责人',
            value: '4.1.1',
            rank: 3,
            children: [],
          },

          {
            id: '16',
            parentId: '14',
            name: '4.1.2熟悉职责落实要求',
            title: '4.1.2熟悉职责落实要求',
            text: '4.1.2熟悉职责落实要求',
            value: '4.1.2',
            rank: 3,
            children: [],
          },
        ],
      },
      {
        id: '17',
        parentId: '13',
        name: '4.2安标联系人',
        title: '4.2安标联系人',
        text: '4.2安标联系人',
        value: '4.2',
        rank: 2,
        children: [
          {
            id: '18',
            parentId: '17',
            name: '4.2.1指定安标联系人',
            title: '4.2.1指定安标联系人',
            text: '4.2.1指定安标联系人',
            value: '4.2.1',
            rank: 3,
            children: [],
          },

          {
            id: '19',
            parentId: '17',
            name: '4.2.2熟悉职责落实要求',
            title: '4.2.2熟悉职责落实要求',
            text: '4.2.2熟悉职责落实要求',
            value: '4.2.2',
            rank: 3,
            children: [],
          },
        ],
      },
      {
        id: '20',
        parentId: '13',
        name: '4.3其他人员',
        title: '4.3其他人员',
        text: '4.3其他人员',
        value: '4.3',
        rank: 2,
        children: [],
      },
    ],
  },
  {
    id: '21',
    parentId: '0',
    name: '5人员能力',
    title: '5人员能力',
    text: '5人员能力',
    value: '5',
    rank: 1,
    children: [
      {
        id: '22',
        parentId: '21',
        name: '5.1主要负责人',
        title: '5.1主要负责人',
        text: '5.1主要负责人',
        value: '5.1',
        rank: 2,
        children: [
          {
            id: '23',
            parentId: '22',
            name: '5.1.1了解产品特殊要求',
            title: '5.1.1了解产品特殊要求',
            text: '5.1.1了解产品特殊要求',
            value: '5.1.1',
            rank: 3,
            children: [],
          },

          {
            id: '24',
            parentId: '22',
            name: '5.1.2熟悉影响因素掌握控制措施和现状',
            title: '5.1.2熟悉影响因素掌握控制措施和现状',
            text: '5.1.2熟悉影响因素掌握控制措施和现状',
            value: '5.1.2',
            rank: 3,
            children: [],
          },
        ],
      },
      {
        id: '25',
        parentId: '21',
        name: '5.2技术人员',
        title: '5.2技术人员',
        text: '5.2技术人员',
        value: '5.2',
        rank: 2,
        children: [
          {
            id: '26',
            parentId: '25',
            name: '5.2.1掌握产品标准及要求',
            title: '5.2.1掌握产品标准及要求',
            text: '5.2.1掌握产品标准及要求',
            value: '5.2.1',
            rank: 3,
            children: [],
          },

          {
            id: '27',
            parentId: '25',
            name: '5.2.2是否为全职人员',
            title: '5.2.2是否为全职人员',
            text: '5.2.2是否为全职人员',
            value: '5.2.2',
            rank: 3,
            children: [],
          },
        ],
      },
      {
        id: '28',
        parentId: '21',
        name: '5.3关键工序人员',
        title: '5.3关键工序人员',
        text: '5.3关键工序人员',
        value: '5.3',
        rank: 2,
        children: [
          {
            id: '29',
            parentId: '28',
            name: '5.3.1熟悉生产工艺',
            title: '5.3.1熟悉生产工艺',
            text: '5.3.1熟悉生产工艺',
            value: '5.3.1',
            rank: 3,
            children: [],
          },

          {
            id: '30',
            parentId: '28',
            name: '5.3.2熟练操作设备',
            title: '5.3.2熟练操作设备',
            text: '5.3.2熟练操作设备',
            value: '5.3.2',
            rank: 3,
            children: [],
          },
        ],
      },
      {
        id: '31',
        parentId: '21',
        name: '5.4检验人员',
        title: '5.4检验人员',
        text: '5.4检验人员',
        value: '5.4',
        rank: 2,
        children: [
          {
            id: '32',
            parentId: '31',
            name: '5.4.1熟悉产品标准检验规程',
            title: '5.4.1熟悉产品标准检验规程',
            text: '5.4.1熟悉产品标准检验规程',
            value: '5.4.1',
            rank: 3,
            children: [],
          },

          {
            id: '33',
            parentId: '31',
            name: '5.4.2正确熟练使用检测检验设备',
            title: '5.4.2正确熟练使用检测检验设备',
            text: '5.4.2正确熟练使用检测检验设备',
            value: '5.4.2',
            rank: 3,
            children: [],
          },
        ],
      },
      {
        id: '34',
        parentId: '21',
        name: '5.5培训考核',
        title: '5.5培训考核',
        text: '5.5培训考核',
        value: '5.5',
        rank: 2,
        children: [],
      },
    ],
  },
  {
    id: '35',
    parentId: '0',
    name: '6文件管理和记录',
    title: '6文件管理和记录',
    text: '6文件管理和记录',
    value: '6',
    rank: 1,
    children: [
      {
        id: '36',
        parentId: '35',
        name: '6.1文件控制',
        title: '6.1文件控制',
        text: '6.1文件控制',
        value: '6.1',
        rank: 2,
        children: [
          {
            id: '37',
            parentId: '36',
            name: '6.1.1建立文件管理制度',
            title: '6.1.1建立文件管理制度',
            text: '6.1.1建立文件管理制度',
            value: '6.1.1',
            rank: 3,
            children: [],
          },

          {
            id: '38',
            parentId: '36',
            name: '6.1.2技术文件和资料的可追溯记录',
            title: '6.1.2技术文件和资料的可追溯记录',
            text: '6.1.2技术文件和资料的可追溯记录',
            value: '6.1.2',
            rank: 3,
            children: [],
          },

          {
            id: '39',
            parentId: '36',
            name: '6.1.3与安标备案技术文件的一致性',
            title: '6.1.3与安标备案技术文件的一致性',
            text: '6.1.3与安标备案技术文件的一致性',
            value: '6.1.3',
            rank: 3,
            children: [],
          },

          {
            id: '40',
            parentId: '36',
            name: '6.1.4安标相关文件资料妥善保存',
            title: '6.1.4安标相关文件资料妥善保存',
            text: '6.1.4安标相关文件资料妥善保存',
            value: '6.1.4',
            rank: 3,
            children: [],
          },
        ],
      },
      {
        id: '41',
        parentId: '35',
        name: '6.2记录控制',
        title: '6.2记录控制',
        text: '6.2记录控制',
        value: '6.2',
        rank: 2,
        children: [
          {
            id: '42',
            parentId: '41',
            name: '6.2.1建立记录管理制度',
            title: '6.2.1建立记录管理制度',
            text: '6.2.1建立记录管理制度',
            value: '6.2.1',
            rank: 3,
            children: [],
          },

          {
            id: '43',
            parentId: '41',
            name: '6.2.2对文件进行控制和保存',
            title: '6.2.2对文件进行控制和保存',
            text: '6.2.2对文件进行控制和保存',
            value: '6.2.2',
            rank: 3,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: '44',
    parentId: '0',
    name: '7采购与外协',
    title: '7采购与外协',
    text: '7采购与外协',
    value: '7',
    rank: 1,
    children: [
      {
        id: '45',
        parentId: '44',
        name: '7.1采购',
        title: '7.1采购',
        text: '7.1采购',
        value: '7.1',
        rank: 2,
        children: [
          {
            id: '46',
            parentId: '45',
            name: '7.1.1制定并实施采购管理制度',
            title: '7.1.1制定并实施采购管理制度',
            text: '7.1.1制定并实施采购管理制度',
            value: '7.1.1',
            rank: 3,
            children: [],
          },

          {
            id: '47',
            parentId: '45',
            name: '7.1.2合格供方名录质量档案',
            title: '7.1.2合格供方名录质量档案',
            text: '7.1.2合格供方名录质量档案',
            value: '7.1.2',
            rank: 3,
            children: [],
          },

          {
            id: '48',
            parentId: '45',
            name: '7.1.3供方合格评定',
            title: '7.1.3供方合格评定',
            text: '7.1.3供方合格评定',
            value: '7.1.3',
            rank: 3,
            children: [],
          },

          {
            id: '49',
            parentId: '45',
            name: '7.1.4采购合同或协议明确要求',
            title: '7.1.4采购合同或协议明确要求',
            text: '7.1.4采购合同或协议明确要求',
            value: '7.1.4',
            rank: 3,
            children: [],
          },

          {
            id: '50',
            parentId: '45',
            name: '7.1.5采购品检验合格证',
            title: '7.1.5采购品检验合格证',
            text: '7.1.5采购品检验合格证',
            value: '7.1.5',
            rank: 3,
            children: [],
          },

          {
            id: '51',
            parentId: '45',
            name: '7.1.6采购件一致性控制措施',
            title: '7.1.6采购件一致性控制措施',
            text: '7.1.6采购件一致性控制措施',
            value: '7.1.6',
            rank: 3,
            children: [],
          },
        ],
      },
      {
        id: '52',
        parentId: '44',
        name: '7.2外协',
        title: '7.2外协',
        text: '7.2外协',
        value: '7.2',
        rank: 2,
        children: [
          {
            id: '53',
            parentId: '52',
            name: '7.2.1外协管理制度',
            title: '7.2.1外协管理制度',
            text: '7.2.1外协管理制度',
            value: '7.2.1',
            rank: 3,
            children: [],
          },

          {
            id: '54',
            parentId: '52',
            name: '7.2.2合格外协方名录质量档案',
            title: '7.2.2合格外协方名录质量档案',
            text: '7.2.2合格外协方名录质量档案',
            value: '7.2.2',
            rank: 3,
            children: [],
          },

          {
            id: '55',
            parentId: '52',
            name: '7.2.3外协方合格评定',
            title: '7.2.3外协方合格评定',
            text: '7.2.3外协方合格评定',
            value: '7.2.3',
            rank: 3,
            children: [],
          },

          {
            id: '56',
            parentId: '52',
            name: '7.2.4外协合同或协议明确要求',
            title: '7.2.4外协合同或协议明确要求',
            text: '7.2.4外协合同或协议明确要求',
            value: '7.2.4',
            rank: 3,
            children: [],
          },

          {
            id: '57',
            parentId: '52',
            name: '7.2.5外协件加工有效性控制',
            title: '7.2.5外协件加工有效性控制',
            text: '7.2.5外协件加工有效性控制',
            value: '7.2.5',
            rank: 3,
            children: [],
          },

          {
            id: '58',
            parentId: '52',
            name: '7.2.6外协件检验合格证明',
            title: '7.2.6外协件检验合格证明',
            text: '7.2.6外协件检验合格证明',
            value: '7.2.6',
            rank: 3,
            children: [],
          },

          {
            id: '59',
            parentId: '52',
            name: '7.2.7外协件检验方式',
            title: '7.2.7外协件检验方式',
            text: '7.2.7外协件检验方式',
            value: '7.2.7',
            rank: 3,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: '60',
    parentId: '0',
    name: '8生产控制',
    title: '8生产控制',
    text: '8生产控制',
    value: '8',
    rank: 1,
    children: [
      {
        id: '61',
        parentId: '60',
        name: '8.1生产能力',
        title: '8.1生产能力',
        text: '8.1生产能力',
        value: '8.1',
        rank: 2,
        children: [
          {
            id: '62',
            parentId: '61',
            name: '★8.1.1产品总装调试能力并自行组装生产',
            title: '8.1.1产品总装调试能力并自行组装生产',
            text: '8.1.1产品总装调试能力并自行组装生产',
            value: '8.1.1',
            rank: 3,
            children: [],
          },

          {
            id: '63',
            parentId: '61',
            name: '★8.1.2生产设备的加工能力精度生产工艺',
            title: '8.1.2生产设备的加工能力精度生产工艺',
            text: '8.1.2生产设备的加工能力精度生产工艺',
            value: '8.1.2',
            rank: 3,
            children: [],
          },

          {
            id: '64',
            parentId: '61',
            name: '8.1.3工艺装备及工位器具其配置和使用',
            title: '8.1.3工艺装备及工位器具其配置和使用',
            text: '8.1.3工艺装备及工位器具其配置和使用',
            value: '8.1.3',
            rank: 3,
            children: [],
          },
        ],
      },
      {
        id: '65',
        parentId: '60',
        name: '8.2过程控制',
        title: '8.2过程控制',
        text: '8.2过程控制',
        value: '8.2',
        rank: 2,
        children: [
          {
            id: '66',
            parentId: '65',
            name: '8.2.1设备工艺装备工位器具管理制度 ',
            title: '8.2.1设备工艺装备工位器具管理制度 ',
            text: '8.2.1设备工艺装备工位器具管理制度 ',
            value: '8.2.1',
            rank: 3,
            children: [],
          },

          {
            id: '67',
            parentId: '65',
            name: '8.2.2重要设备操作规程',
            title: '8.2.2重要设备操作规程',
            text: '8.2.2重要设备操作规程',
            value: '8.2.2',
            rank: 3,
            children: [],
          },

          {
            id: '68',
            parentId: '65',
            name: '8.2.3工装验证设备维修保养记录     ',
            title: '8.2.3工装验证设备维修保养记录     ',
            text: '8.2.3工装验证设备维修保养记录     ',
            value: '8.2.3',
            rank: 3,
            children: [],
          },

          {
            id: '69',
            parentId: '65',
            name: '8.2.4工艺文件是否完整正确',
            title: '8.2.4工艺文件是否完整正确',
            text: '8.2.4工艺文件是否完整正确',
            value: '8.2.4',
            rank: 3,
            children: [],
          },

          {
            id: '70',
            parentId: '65',
            name: '8.2.5关键工序控制程序或作业指导书 ',
            title: '8.2.5关键工序控制程序或作业指导书 ',
            text: '8.2.5关键工序控制程序或作业指导书 ',
            value: '8.2.5',
            rank: 3,
            children: [],
          },

          {
            id: '71',
            parentId: '65',
            name: '8.2.6生产过程对环境条件是否有要求',
            title: '8.2.6生产过程对环境条件是否有要求',
            text: '8.2.6生产过程对环境条件是否有要求',
            value: '8.2.6',
            rank: 3,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: '72',
    parentId: '0',
    name: '9检验和测试控制',
    title: '9检验和测试控制',
    text: '9检验和测试控制',
    value: '9',
    rank: 1,
    children: [
      {
        id: '73',
        parentId: '72',
        name: '9.1检验控制',
        title: '9.1检验控制',
        text: '9.1检验控制',
        value: '9.1',
        rank: 2,
        children: [],
      },
      {
        id: '74',
        parentId: '72',
        name: '9.2检验能力',
        title: '9.2检验能力',
        text: '9.2检验能力',
        value: '9.2',
        rank: 2,
        children: [
          {
            id: '75',
            parentId: '74',
            name: '9.2.1检验环境设备的精度和能力',
            title: '9.2.1检验环境设备的精度和能力',
            text: '9.2.1检验环境设备的精度和能力',
            value: '9.2.1',
            rank: 3,
            children: [],
          },
          {
            id: '76',
            parentId: '74',
            name: '9.2.2产品批量生产时的检验要求 ',
            title: '9.2.2产品批量生产时的检验要求 ',
            text: '9.2.2产品批量生产时的检验要求 ',
            value: '9.2.2',
            rank: 3,
            children: [],
          },
        ],
      },

      {
        id: '77',
        parentId: '72',
        name: '9.3操作规程',
        title: '9.3操作规程',
        text: '9.3操作规程',
        value: '9.3',
        rank: 2,
        children: [
          {
            id: '78',
            parentId: '77',
            name: '9.3.1检测检验设备的操作规程',
            title: '9.3.1检测检验设备的操作规程',
            text: '9.3.1检测检验设备的操作规程',
            value: '9.3.1',
            rank: 3,
            children: [],
          },
          {
            id: '79',
            parentId: '77',
            name: '9.3.2操作规程方便获取查阅    ',
            title: '9.3.2操作规程方便获取查阅    ',
            text: '9.3.2操作规程方便获取查阅    ',
            value: '9.3.2',
            rank: 3,
            children: [],
          },
        ],
      },

      {
        id: '80',
        parentId: '72',
        name: '9.4检验规程',
        title: '9.4检验规程',
        text: '9.4检验规程',
        value: '9.4',
        rank: 2,
        children: [
          {
            id: '81',
            parentId: '80',
            name: '9.4.1原材料及外购件检验规程',
            title: '9.4.1原材料及外购件检验规程',
            text: '9.4.1原材料及外购件检验规程',
            value: '9.4.1',
            rank: 3,
            children: [],
          },
          {
            id: '82',
            parentId: '80',
            name: '9.4.2外协件检验规程',
            title: '9.4.2外协件检验规程',
            text: '9.4.2外协件检验规程',
            value: '9.4.2',
            rank: 3,
            children: [],
          },
          {
            id: '83',
            parentId: '80',
            name: '9.4.3关键工序检验规程',
            title: '9.4.3关键工序检验规程',
            text: '9.4.3关键工序检验规程',
            value: '9.4.3',
            rank: 3,
            children: [],
          },
          {
            id: '84',
            parentId: '80',
            name: '9.4.4出厂检验规程',
            title: '9.4.4出厂检验规程',
            text: '9.4.4出厂检验规程',
            value: '9.4.4',
            rank: 3,
            children: [],
          },
        ],
      },

      {
        id: '85',
        parentId: '72',
        name: '9.5检验记录',
        title: '9.5检验记录',
        text: '9.5检验记录',
        value: '9.5',
        rank: 2,
        children: [],
      },
      {
        id: '86',
        parentId: '72',
        name: '9.6计量检定与校准',
        title: '9.6计量检定与校准',
        text: '9.6计量检定与校准',
        value: '9.6',
        rank: 2,
        children: [
          {
            id: '87',
            parentId: '86',
            name: '9.6.1周期检定或校准',
            title: '9.6.1周期检定或校准',
            text: '9.6.1周期检定或校准',
            value: '9.6.1',
            rank: 3,
            children: [],
          },
          {
            id: '88',
            parentId: '86',
            name: '9.6.2内部校准规范',
            title: '9.6.2内部校准规范',
            text: '9.6.2内部校准规范',
            value: '9.6.2',
            rank: 3,
            children: [],
          },
          {
            id: '89',
            parentId: '86',
            name: '9.6.3内部检定文件',
            title: '9.6.3内部检定文件',
            text: '9.6.3内部检定文件',
            value: '9.6.3',
            rank: 3,
            children: [],
          },
          {
            id: '90',
            parentId: '86',
            name: '9.6.4检测结果追溯评定',
            title: '9.6.4检测结果追溯评定',
            text: '9.6.4检测结果追溯评定',
            value: '9.6.4',
            rank: 3,
            children: [],
          },
          {
            id: '91',
            parentId: '86',
            name: '9.6.5有效性标识',
            title: '9.6.5有效性标识',
            text: '9.6.5有效性标识',
            value: '9.6.5',
            rank: 3,
            children: [],
          },
        ],
      },

      {
        id: '92',
        parentId: '72',
        name: '9.7出厂检验',
        title: '9.7出厂检验',
        text: '9.7出厂检验',
        value: '9.7',
        rank: 2,
        children: [
          {
            id: '93',
            parentId: '92',
            name: '★9.7.1出厂检验检测检验设备',
            title: '9.7.1出厂检验检测检验设备',
            text: '9.7.1出厂检验检测检验设备',
            value: '9.7.1',
            rank: 3,
            children: [],
          },
          {
            id: '94',
            parentId: '92',
            name: '9.7.2检验报告内容',
            title: '9.7.2检验报告内容',
            text: '9.7.2检验报告内容',
            value: '9.7.2',
            rank: 3,
            children: [],
          },
        ],
      },

      {
        id: '95',
        parentId: '72',
        name: '9.8检验外包',
        title: '9.8检验外包',
        text: '9.8检验外包',
        value: '9.8',
        rank: 2,
        children: [],
      },
    ],
  },
  {
    id: '96',
    parentId: '0',
    name: '10不合格品控制',
    title: '10不合格品控制',
    text: '10不合格品控制',
    value: '10',
    rank: 1,
    children: [
      {
        id: '97',
        parentId: '96',
        name: '10.1管理制度',
        title: '10.1管理制度',
        text: '10.1管理制度',
        value: '10.1',
        rank: 2,
        children: [],
      },
      {
        id: '98',
        parentId: '96',
        name: '10.2不合格品处理',
        title: '10.2不合格品处理',
        text: '10.2不合格品处理',
        value: '10.2',
        rank: 2,
        children: [],
      },
      {
        id: '99',
        parentId: '96',
        name: '10.3纠正及验证',
        title: '10.3纠正及验证',
        text: '10.3纠正及验证',
        value: '10.3',
        rank: 2,
        children: [],
      },
      {
        id: '100',
        parentId: '96',
        name: '10.4销售约束',
        title: '10.4销售约束',
        text: '10.4销售约束',
        value: '10.4',
        rank: 2,
        children: [],
      },
      {
        id: '101',
        parentId: '96',
        name: '10.5相关处理及信息留存',
        title: '10.5相关处理及信息留存',
        text: '10.5相关处理及信息留存',
        value: '10.5',
        rank: 2,
        children: [],
      },
    ],
  },
  {
    id: '102',
    parentId: '0',
    name: '11变更及一致性控制',
    title: '11变更及一致性控制',
    text: '11变更及一致性控制',
    value: '11',
    rank: 1,
    children: [
      {
        id: '103',
        parentId: '102',
        name: '11.1 变更控制',
        title: '11.1 变更控制',
        text: '11.1 变更控制',
        value: '11.1',
        rank: 2,
        children: [],
      },
      {
        id: '104',
        parentId: '102',
        name: '★11.2产品一致性控制',
        title: '11.2产品一致性控制',
        text: '11.2产品一致性控制',
        value: '11.2',
        rank: 2,
        children: [],
      },
      {
        id: '105',
        parentId: '102',
        name: '11.3产品可追溯性',
        title: '11.3产品可追溯性',
        text: '11.3产品可追溯性',
        value: '11.3',
        rank: 2,
        children: [],
      },
    ],
  },

  {
    id: '106',
    parentId: '0',
    name: '12库房管理',
    title: '12库房管理',
    text: '12库房管理',
    value: '12',
    rank: 1,
    children: [
      {
        id: '107',
        parentId: '106',
        name: '12.1管理制度',
        title: '12.1管理制度',
        text: '12.1管理制度',
        value: '12.1',
        rank: 2,
        children: [],
      },
      {
        id: '108',
        parentId: '106',
        name: '12.2库房管理',
        title: '12.2库房管理',
        text: '12.2库房管理',
        value: '12.2',
        rank: 2,
        children: [
          {
            id: '109',
            parentId: '108',
            name: '12.2.1分类存放并标识',
            title: '12.2.1分类存放并标识',
            text: '12.2.1分类存放并标识',
            value: '12.2.1',
            rank: 3,
            children: [],
          },
          {
            id: '110',
            parentId: '108',
            name: '12.2.2原材料半成品成品台账',
            title: '12.2.2原材料半成品成品台账',
            text: '12.2.2原材料半成品成品台账',
            value: '12.2.2',
            rank: 3,
            children: [],
          },
        ],
      },

      {
        id: '111',
        parentId: '106',
        name: '12.3贮存条件',
        title: '12.3贮存条件',
        text: '12.3贮存条件',
        value: '12.3',
        rank: 2,
        children: [],
      },
    ],
  },

  {
    id: '112',
    parentId: '0',
    name: '13安全标志标识',
    title: '13安全标志标识',
    text: '13安全标志标识',
    value: '13',
    rank: 1,
    children: [
      {
        id: '113',
        parentId: '112',
        name: '13.1标识许可',
        title: '13.1标识许可',
        text: '13.1标识许可',
        value: '13.1',
        rank: 2,
        children: [],
      },
      {
        id: '114',
        parentId: '112',
        name: '13.2标识要求',
        title: '13.2标识要求',
        text: '13.2标识要求',
        value: '13.2',
        rank: 2,
        children: [],
      },
      {
        id: '115',
        parentId: '112',
        name: ' ★13.3禁止加施标识 ',
        title: '13.3禁止加施标识',
        text: '13.3禁止加施标识',
        value: '13.3',
        rank: 2,
        children: [],
      },
    ],
  },
]
module.exports = [
  {
    url: '/tree/list',
    type: 'post',
    response() {
      return { code: 200, msg: 'success', data }
    },
  },
]
