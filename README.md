# githubcontent-index
index.html for https://friday.w3tools.de/githubcontent/

## Apache virtual host config

```apache
SSLProxyEngine on

RewriteEngine on
RewriteCond %{HTTP_HOST} ^(www\.)(.*)$ [NC]
RewriteRule ^/(.*)$ https://%2/$1 [R=301,L]

RewriteRule ^(/githubcontent)/?$ $1/githubcontent-index/master/index.html [L,R=301]
RewriteRule ^(/githubcontent/[^/]+)/?$ $1/master/ [L,R=301]
RewriteRule ^(/githubcontent(/[^/]+){2})/?$ $1/index.html [L,R=301]
<Location "/githubcontent/">
	ProxyPass          "https://raw.githubusercontent.com/redneck-f25/"
	ProxyPassReverse   "https://raw.githubusercontent.com/redneck-f25/"
	RewriteRule        .js$           -   [L,E=CONTENTTYPE:application/javascript]
	RewriteRule        .css$          -   [L,E=CONTENTTYPE:text/css]
	RewriteRule        .(png|gif)$    -   [L,E=CONTENTTYPE:image/$1]
	RewriteRule        .svg$          -   [L,E=CONTENTTYPE:image/svg+xml]
	RewriteRule        .jpe?g$        -   [L,E=CONTENTTYPE:image/jpeg]
	RewriteRule        .html$         -   [L,E=CONTENTTYPE:text/html]
	Header edit   Content-Type   ^[-/\w]+(\s*;.*)$   %{CONTENTTYPE}e$1   env=CONTENTTYPE
	Header unset  content-security-policy
	Header unset  x-content-type-options
</Location>

<Location /.well-known/acme-challenge>
	AuthType None
	Require all granted
	ProxyPass !
</Location>
```

## See also

- https://github.com/rgrove/rawgit
- https://rawgit.com
