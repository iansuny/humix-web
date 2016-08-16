/**
 * PostController
 *
 * @description :: Server-side logic for managing blogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get_post_from_dw: function(req, res) {
		var request = require("request");
		var cheerio = require("cheerio");
		var url = "https://developer.ibm.com/open/category/humix/";

		request(url, function (error, response, html) {
			if (!error && response.statusCode == 200) {
				var $ = cheerio.load(html);
				$('footer.pn-post-meta').each(function(i, element){
					var id = $(this).prev().prev().parent().attr('id')
					var title = $(this).prev().prev().children().children().text();
					var url = $(this).prev().prev().children().children().attr('href');
					var abstract = $(this).prev().children().text();
					var info = $(this).children().children().text();

					Post.findOne({
						postID: id
					})
					.exec(function(err, post) {
						if(typeof(blog) == 'undefined'){
							Post.create({
								postID: id,
								title: title,
								url: url,
								abstract: abstract,
								info: info.replace(/\s+/g, ' '),
							})
							.exec(function(err, pos) {
								if(err) return res.negotiate(err);
								return;
							})
						}
					})
				});
			}
		});
	},

	get_post: function(req, res){
		Post.find({
		})
		.exec(function(err, posts) {
			if(err) return res.negotiate(err);
			return res.json({ result: posts });
		})
	}
	
};

