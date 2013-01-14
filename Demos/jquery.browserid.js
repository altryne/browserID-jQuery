/**
 * Description : This is a jQuery client library for the BrowserID Protocol.
 * Created by Alex Wolkov (alexw.me) .
 */

(function ($) {
	var options = {
			assertion : null,
			email : null,
			login_button_class : 'browserid-login',
			logout_button_class : 'browserid-logout',
			onlogin : null,
			onfail : null,
			onlogout : null,
			server : 'login.php'
		}
	var methods = {
		init : function (settings) {
			if(typeof settings === 'object'){
				$.extend(options, settings);
			}
			this.addClass(options.login_button_class).on('click.login', _login);
		},
		getEmail:function () {
			return options.email;
		}
	}
	var _login = function () {
		var $el = $(this);
		navigator.id.get(function (assertion) {
			if (assertion) {
				options.assertion = assertion;
				//got an assertion, now send it up to the server for verification
				_verify_assertion.apply($el);
			}else{
				if(typeof options.onfail === 'function') {
					options.onfail.apply(this);
				}
			}
		});
	}

	var _logout = function () {
		navigator.id.logout();
		options.assertion = null;
		options.email = null;
		$(this).removeClass(options.logout_button_class).removeClass(options.login_button_class);

		methods.init.apply($(this));
		if(typeof options.onlogout === 'function') {
			options.onlogout.apply(this);
		}
	}

	var _verify_assertion = function(){
		var $el = this;

		$.getJSON(options.server, {assertion:options.assertion}, function (response) {
			if(response.status && response.status == 'okay'){
				options.email = response.email;
				$el.removeClass(options.login_button_class).addClass('options.logout_button_class').text('Logout ('+ response.email +')');
				$el.off('click.login').on('click.logout',_logout);

				if(typeof options.onlogin === 'function') {
					options.onlogin.apply(this);
				}
			}else if(response.status !== 'okay'){
				if(typeof options.onfail === 'function') {
					options.onfail.apply(response);
				}
			}
		})
	}

	$.fn.browserID = function (method) {

		// Method calling logic
		if (methods[method]) {

			return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {

			return methods.init.apply(this, arguments);
		}
	}
})(jQuery);
