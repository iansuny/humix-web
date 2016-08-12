/**
 * WebController
 *
 * @description :: Server-side logic for managing webs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	indexIO: function(req, res) {
		return res.view('blank', {
			layout: 'index'
		})
	},
	actionIO: function(req, res) {
		action = req.param('action');
		switch(action) {
			case 'index':
				return res.view('blank', {
					layout: 'index',
				})
			case 'get_start':
				return res.view('blank', {
					layout: 'get_start',
				})
		}
	}
};

