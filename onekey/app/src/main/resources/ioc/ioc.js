var ioc = {
	quartz : {
		type : "org.nutz.ioc.impl.PropertiesProxy",
		fields : {
			paths : [ "quartz" ],
			utf8 : false
		}
	},
	log : {
		type : "org.nutz.aop.interceptor.LoggingMethodInterceptor"
	},
	$aop : {
		type : "org.nutz.ioc.aop.config.impl.ComboAopConfigration",
		fields : {
			aopConfigrations : [ {
				type : "org.nutz.ioc.aop.config.impl.JsonAopConfigration",
				fields : {
					itemList : [ [ "com\\.kerbores\\..+", ".+", "ioc:log" ], // 日志
					[ "com\\.kerbores\\.onekey\\.module\\..+", "^(?!.*(_)).*$", "ioc:apm" ], // APM
					[ "com\\.kerbores\\.onekey\\.module\\..+", "^(?!.*(_)).*$", "ioc:nameSpace" ], // 模块命名空间
					[ "com\\.kerbores\\.onekey\\.module\\..+", "^(?!.*(_)).*$", "ioc:aopTimer" ],// 模块执行时间
					[ "com\\.kerbores\\.onekey\\.module\\..+", "^(?!.*(_)).*$", "ioc:txSERIALIZABLE" ] // 模块事务处理
					],
				}
			}, {
				type : "org.nutz.ioc.aop.config.impl.AnnotationAopConfigration"
			} ]
		}
	}
};