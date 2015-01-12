using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SimpleModelBinding.Startup))]
namespace SimpleModelBinding
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
