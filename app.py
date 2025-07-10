from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Categoria(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50), nullable=False)
    maxima_semestre = db.Column(db.Integer, nullable=False)
    subcategorias = db.relationship('Subcategoria', backref='categoria', lazy=True)

class Subcategoria(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50), nullable=False)
    maxima_sub=db.Column(db.Integer, nullable=False)
    descricao = db.Column(db.String(500), nullable=True)
    categoria_id = db.Column(db.Integer, db.ForeignKey('categoria.id'), nullable=False)

with app.app_context():
    db.drop_all()
    db.create_all()

insert_categorias = [
    Categoria(nome='Aperfeiçoamento e Enriquencimento Cultural e Esportivo', maxima_semestre=80),
    Categoria(nome='Divulgação Científica e Inicialização à Docência', maxima_semestre=60)
]

insert_subcategorias = [
    Subcategoria(nome='Participação como agente em atividades culturais', categoria_id=1, maxima_sub=30, descricao="filme, teatro, apresentações artísticas, feiras, exposições, festivais e competições esportivas, bandas, coral, olimpíadas em geral."),
    Subcategoria(nome='Visitas técnicas e culturais', categoria_id=1, maxima_sub=30, descricao="Patrimônios tombados, cidades históricas, monumentos, museus, memoriais, escola-modelo, creches, berçários, ONGs, APAE e entidades afins, hospitais laboratórios, instituições de ensino e pesquisa, empresas públicas e privadas e outras de interesse do curso."),
    Subcategoria(nome='Monitoria remunerada ou voluntária', categoria_id=2, maxima_sub=60),
    Subcategoria(nome='Membro atuante em atividades Técnico-científicas', categoria_id=2, maxima_sub=30)
]

with app.app_context():
    db.create_all()
    if Categoria.query.count() == 0:
        db.session.bulk_save_objects(insert_categorias)
        db.session.commit()
    if Subcategoria.query.count() == 0:
        db.session.bulk_save_objects(insert_subcategorias)
        db.session.commit()

@app.route('/')
def index():
    categorias = Categoria.query.all()
    subcategorias = Subcategoria.query.all()
    return render_template('enviar_horas.html', categorias=categorias)

if __name__ == '__main__':
    app.run(debug=True)