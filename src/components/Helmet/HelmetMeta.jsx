import { Helmet } from 'react-helmet';

export default function HelmetMeta({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16524282110"
      />
      <script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'AW-16524282110');
          `}
      </script>
    </Helmet>
  );
}
